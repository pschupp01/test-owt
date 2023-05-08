package com.owt.boatapp.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.owt.boatapp.entities.Boat;
import com.owt.boatapp.repositories.BoatRepository;

@SpringBootTest
public class BoatServiceTest {
    @Mock
    private BoatRepository boatRepository;

    @InjectMocks
    private BoatService boatService;

    private Boat testBoat;

    BoatServiceTest() {
        testBoat = new Boat();
        testBoat.setId(1L);
        testBoat.setName("Test Boat");
        testBoat.setDescription("Test Description");
    }

    @Test
    public void shouldCreateBoat() {
        when(boatRepository.save(ArgumentMatchers.any(Boat.class))).thenReturn(testBoat);
        Boat created = boatService.createBoat(testBoat);
        assertEquals(created.getName(), testBoat.getName());
        assertEquals(created.getDescription(), testBoat.getDescription());
        verify(boatRepository).save(testBoat);
    }

    @Test
    public void shouldReturnAllBoats() {
        List<Boat> boats = new ArrayList<Boat>();
        boats.add(testBoat);
        when(boatRepository.findAll()).thenReturn(boats);
        List<Boat> expected = boatService.getBoats();
        assertEquals(expected, boats);
        verify(boatRepository).findAll();
    }

    @Test
    public void shouldReturnSpecificBoat() {
        Optional<Boat> optionalBoat = Optional.of(testBoat);
        when(boatRepository.findById(1L)).thenReturn(optionalBoat);
        Boat expected = boatService.getBoat(1L);
        assertEquals(expected, testBoat);
        verify(boatRepository).findById(1L);
    }

    @Test
    public void shouldDeleteBoat() {
        boatService.deleteBoat(1L);
        verify(boatRepository).deleteById(1L);
    }

    @Test
    public void shouldUpdateBoat() {
        Optional<Boat> optionalBoat = Optional.of(testBoat);
        when(boatRepository.findById(1L)).thenReturn(optionalBoat);
        when(boatRepository.save(ArgumentMatchers.any(Boat.class))).thenAnswer(i -> i.getArguments()[0]);
        Boat payload = new Boat();
        payload.setName("Updated Name");
        payload.setDescription("Updated Description");
        Boat expected = boatService.updateBoat(1L, payload);
        assertEquals(expected.getName(), payload.getName());
        assertEquals(expected.getDescription(), payload.getDescription());
    }
}