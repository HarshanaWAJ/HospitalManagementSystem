package com.example.backend.Repositories;

import com.example.backend.Entities.User_Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface User_Role_Repo extends JpaRepository<User_Roles, Integer> {

}
