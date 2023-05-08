package com.owt.boatapp.controllers;

import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.*;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import com.owt.boatapp.entities.Boat;
import com.owt.boatapp.security.util.JwtTokenUtil;
import com.owt.boatapp.services.BoatService;
import com.owt.boatapp.util.JsonUtil;

@SpringBootTest
@AutoConfigureMockMvc
public class BoatControllerTest {
    @Autowired
    private MockMvc mockMvc;

    private Boat testBoat;

    @MockBean
    private BoatService boatService;

    @MockBean
    private static JwtTokenUtil jwtTokenUtil;

    BoatControllerTest() {
        testBoat = new Boat();
        testBoat.setId(1L);
        testBoat.setName("testBoat");
        testBoat.setDescription("Test Description");
    }

    private void mockAuth() {
        when(jwtTokenUtil.validateJwtToken("validToken")).thenReturn(true);
        when(jwtTokenUtil.getUserNameFromJwtToken("validToken")).thenReturn("testUser");
    }

    @Test
    public void shouldReturnUnauthorizedIfNoToken() throws Exception {
        mockAuth();
        mockMvc.perform(get("/api/boats")).andExpect(status().isForbidden());
    }

    @Test
    public void shouldReturnUnauthorizedWithInvalidToken() throws Exception {
        mockAuth();
        mockMvc.perform(get("/api/boats").header("Authorization", "Bearer invalidToken"))
                .andExpect(status().isForbidden());
    }

    @Test
    public void shouldCreateBoat() throws Exception {
        mockAuth();
        when(boatService.createBoat(ArgumentMatchers.any(Boat.class))).thenReturn(testBoat);
        mockMvc.perform(post("/api/boats")
                .header("Authorization", "Bearer validToken")
                .contentType(MediaType.APPLICATION_JSON)
                .content(JsonUtil.toJson(testBoat)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name", is(testBoat.getName())));

        verify(boatService).createBoat(ArgumentMatchers.any(Boat.class));
    }

    @Test
    public void shouldReturnAllBoats() throws Exception {
        mockAuth();
        List<Boat> boats = new ArrayList<Boat>();
        boats.add(testBoat);
        when(boatService.getBoats(null, null)).thenReturn(boats);

        mockMvc.perform(get("/api/boats")
                .header("Authorization", "Bearer validToken")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name", is(testBoat.getName())));

        verify(boatService).getBoats(null, null);
    }

    @Test
    public void shouldReturnSpecificBoat() throws Exception {
        mockAuth();
        when(boatService.getBoat(1L)).thenReturn(testBoat);

        mockMvc.perform(get("/api/boats/1")
                .header("Authorization", "Bearer validToken")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is(testBoat.getName())));

        verify(boatService).getBoat(1L);
    }

    @Test
    public void shouldDeleteBoat() throws Exception {
        mockAuth();
        // Delete it
        mockMvc.perform(delete("/api/boats/1")
                .header("Authorization", "Bearer validToken")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        verify(boatService).deleteBoat(1L);
    }

    @Test
    public void shouldUpdateBoat() throws Exception {
        mockAuth();
        when(boatService.updateBoat(eq(1L), ArgumentMatchers.any(Boat.class))).thenReturn(testBoat);
        mockMvc.perform(put("/api/boats/1")
                .header("Authorization", "Bearer validToken")
                .contentType(MediaType.APPLICATION_JSON)
                .content(JsonUtil.toJson(testBoat)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is(testBoat.getName())));
        verify(boatService).updateBoat(eq(1L), ArgumentMatchers.any(Boat.class));
    }
}
