package com.owt.boatapp.services;

import com.owt.boatapp.model.BoatEntity;
import com.owt.boatapp.repositories.BoatRepository;

import io.micrometer.common.lang.Nullable;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class BoatService {

    @Autowired
    private BoatRepository boatRepository;

    public BoatEntity getBoat(Long id) {
        Optional<BoatEntity> boat = boatRepository.findById(id);
        if(boat.isPresent()){
            return boat.get();
        }
        return null;
    }

    public List<BoatEntity> getBoats(
        Integer  page, 
        Integer  size
    ) {
        if(page == null || size == null){
            return this.getBoats();
        }
        Pageable pageable = PageRequest.of(page,size);
        Page<BoatEntity> resultPage = boatRepository.findAll(pageable);
        return resultPage.getContent();
    }

    public List<BoatEntity> getBoats(
    ) {
           return  boatRepository.findAll();
    }

    public BoatEntity createBoat(BoatEntity boat) {
        return boatRepository.save(boat);
    }

    public void deleteBoat(@PathVariable Long id) {
        boatRepository.deleteById(id);
    }
}
