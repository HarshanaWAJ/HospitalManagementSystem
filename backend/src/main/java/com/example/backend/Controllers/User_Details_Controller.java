package com.example.backend.Controllers;

import com.example.backend.DTO.User_Details_DTO;
import com.example.backend.Services.User_Details_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataRetrievalFailureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/api/med-care/user")
@CrossOrigin
public class User_Details_Controller {

    @Autowired
    private User_Details_Service userDetailsService;

    @PostMapping("/reg-user")
    public ResponseEntity<String> addUserRole(@RequestBody User_Details_DTO userDetailsDto)
    {
        try {
            String UserDetailsSavedStatus = userDetailsService.saveUserDetails(userDetailsDto);
            if (UserDetailsSavedStatus == "Username Already Exists") {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Username Already Exists");
            } else if (UserDetailsSavedStatus == "Email ID Already Registered") {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Email ID Already Registered");
            } else if (UserDetailsSavedStatus == "User Contact Already Registered") {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("User Contact Already Registered");
            }
            else {
                return ResponseEntity.status(HttpStatus.CREATED).body("User Registered");
            }
        }  catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Registration Failed");
        }
    }

    @GetMapping("/get-all-users")
    public ResponseEntity <List<User_Details_DTO>> getAllUserRoles()
    {
        try {
            List<User_Details_DTO> userDetails = userDetailsService.getAllUserDetails();
            return ResponseEntity.ok(
                    userDetails
            );
        } catch (DataRetrievalFailureException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.FOUND).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
