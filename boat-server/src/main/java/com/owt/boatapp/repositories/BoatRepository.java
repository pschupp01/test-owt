package com.owt.boatapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.owt.boatapp.entities.Boat;

@Repository
public interface BoatRepository extends JpaRepository<Boat, Long>{
    
}
