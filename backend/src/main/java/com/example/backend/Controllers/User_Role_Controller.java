package com.example.backend.Controllers;

import com.example.backend.DTO.User_Role_DTO;
import com.example.backend.Services.User_Role_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DataRetrievalFailureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/med-care/roles")
@CrossOrigin
public class User_Role_Controller {

    @Autowired
    private User_Role_Service userRoleService;

    @GetMapping("/get-all-roles")
    public ResponseEntity <List<User_Role_DTO>> getAllUserRoles()
    {
        try {
            List<User_Role_DTO> userRoleDTOList = userRoleService.getAllUserRoles();
            return ResponseEntity.ok(userRoleDTOList);
        } catch (DataRetrievalFailureException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.FOUND).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add-role")
    public ResponseEntity<String> addUserRole(@RequestBody User_Role_DTO userRoleDto)
    {
        try {
            User_Role_DTO savedUserRoleDto = userRoleService.saveUserRole(userRoleDto);
            return ResponseEntity.status(HttpStatus.CREATED).body("User Role Created");
        }  catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Failed to create Role");
        }
    }

    @PutMapping("/update-role")
    public ResponseEntity<String> updateUserRole(@RequestBody User_Role_DTO userRoleDto)
    {
        try {
            User_Role_DTO savedUserRoleDto = userRoleService.updateUserRole(userRoleDto);
            return ResponseEntity.status(HttpStatus.CREATED).body("User Role Created");
        }  catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Failed to create Role");
        }
    }

    @DeleteMapping("/delete-role/{role_id}")
    public ResponseEntity<String> deleteUserRole(@PathVariable int role_id) {
        try {
            userRoleService.deleteRole(role_id);
            return ResponseEntity.status(HttpStatus.OK).body("User Role Deleted");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete the Role");
        }
    }
}
