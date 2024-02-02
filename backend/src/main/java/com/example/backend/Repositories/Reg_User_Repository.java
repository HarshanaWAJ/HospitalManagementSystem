package com.example.backend.Repositories;

import com.example.backend.DTO.Reg_User_DTO;
import com.example.backend.Entities.Reg_User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface Reg_User_Repository extends JpaRepository<Reg_User, Integer> {

    //Get All User Details
    @Modifying
    @Query(value = "SELECT u.reg_no, u.first_name, u.last_name, u.gender, u.user_address,u.user_age, u.user_contact, u.user_email, u.user_emergency_contact, user_roles.role_name\n" +
            "FROM reg_users u\n" +
            "INNER JOIN user_roles ON u.role_id = user_roles.role_id;", nativeQuery = true)
    List<Object[]> getUserList();



}
