package com.example.backend.Controllers;

import com.example.backend.DTO.Reg_User_DTO;
import com.example.backend.DTO.User_Role_DTO;
import com.example.backend.Services.Reg_User_Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/med-care/reg-user")
@CrossOrigin
public class Reg_User_Controller {

    @Autowired
    private Reg_User_Services regUserServices;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser (@RequestBody Reg_User_DTO regUserDto) {
        try{
            regUserServices.registerUser(regUserDto);
            return ResponseEntity.status(HttpStatus.CREATED).body("User Registered");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User Registration Failed");
        }
    }

    @GetMapping("/all-users")
    public ResponseEntity<?> getUserList() {
        try {
            List<Object[]> userList = regUserServices.getAllRegisteredUsers();
            return ResponseEntity.ok(userList);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("No Data Available");
        }
    }

    @PutMapping("/update-user")
    public ResponseEntity<String> updateUserRole(@RequestBody Reg_User_DTO regUserDto)
    {
        try {
            Reg_User_DTO savedREgUserDto = regUserServices.updateRegUser(regUserDto);
            return ResponseEntity.status(HttpStatus.CREATED).body("User Role Created");
        }  catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Failed to create Role");
        }
    }

}
