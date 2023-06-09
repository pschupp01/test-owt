package com.owt.boatapp.services;

import com.owt.boatapp.entities.Boat;
import com.owt.boatapp.repositories.BoatRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BoatService {

    @Autowired
    private BoatRepository boatRepository;

    public Boat getBoat(Long id) {
        Optional<Boat> boat = boatRepository.findById(id);
        if (boat.isPresent()) {
            return boat.get();
        }
        return null;
    }

    public List<Boat> getBoats(
            Integer page,
            Integer size) {
        if (page == null || size == null) {
            return this.getBoats();
        }
        Pageable pageable = PageRequest.of(page, size);
        Page<Boat> resultPage = boatRepository.findAll(pageable);
        return resultPage.getContent();
    }

    public List<Boat> getBoats() {
        return boatRepository.findAll();
    }

    public Boat createBoat(Boat boat) {
        return boatRepository.save(boat);
    }

    public void deleteBoat(Long id) {
        boatRepository.deleteById(id);
    }

    public Boat updateBoat(Long id, Boat payload) {
        Optional<Boat> boatRes = boatRepository.findById(id);
        if (boatRes.isPresent()) {
            Boat boat = boatRes.get();
            boat.setName(payload.getName());
            boat.setDescription(payload.getDescription());
            return boatRepository.save(boat);
        }
        return null;
    }
}
