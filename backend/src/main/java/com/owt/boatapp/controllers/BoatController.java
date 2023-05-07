package com.owt.boatapp.controllers;

import com.owt.boatapp.entities.Boat;
import com.owt.boatapp.services.BoatService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class BoatController {

    @Autowired
    private BoatService boatService;

    @GetMapping("/api/boats/{id}")
    public Boat getBoat(@PathVariable Long id) {
        if (id == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        Boat boat = boatService.getBoat(id);
        if (boat != null) {
            return boat;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/api/boats")
    public List<Boat> getBoats(
            @RequestParam(name = "page", required = false) Integer page,
            @RequestParam(name = "size", required = false) Integer size) {
        return boatService.getBoats(page, size);
    }

    @PostMapping("/api/boats")
    Boat newBoat(@RequestBody Boat boat) {
        try {
            Boat savedBoat = boatService.createBoat(boat);
            return savedBoat;
        } catch (Error e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }

    @PutMapping("/api/boats/{id}")
    Boat replaceBoat(@RequestBody Boat newBoat, @PathVariable Long id) {
        try {
            Boat savedBoat = boatService.updateBoat(id, newBoat);
            return savedBoat;
        } catch (Error e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }

    @DeleteMapping("/api/boats/{id}")
    public void deleteBoat(@PathVariable Long id) {
        boatService.deleteBoat(id);
    }
}
