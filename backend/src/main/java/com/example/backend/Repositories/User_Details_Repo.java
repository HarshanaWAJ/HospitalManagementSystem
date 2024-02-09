package com.example.backend.Repositories;

import com.example.backend.Entities.User_Details;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;

public interface User_Details_Repo extends JpaRepository<User_Details, Integer> {

    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    boolean existsByTell(String tell);
}
