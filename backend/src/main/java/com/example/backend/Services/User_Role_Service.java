package com.example.backend.Services;

import com.example.backend.DTO.User_Role_DTO;
import com.example.backend.Entities.User_Roles;
import com.example.backend.Repositories.User_Role_Repo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class User_Role_Service {

    @Autowired
    private User_Role_Repo userRoleRepo;
    @Autowired
    private ModelMapper modelMapper;

    //Add Role Data
    public User_Role_DTO saveUserRole(User_Role_DTO userRoleDto) {
     try {
         userRoleRepo.save(modelMapper.map(userRoleDto, User_Roles.class));
         return userRoleDto;
     } catch (Exception e) {
         e.printStackTrace();
         return null;
     }
    }

    //Get Role Data
    public  List<User_Role_DTO> getAllUserRoles() {
        try{
            List<User_Roles> userRoles = userRoleRepo.findAll();
            return userRoleRepo.findAll().stream()
                    .map(userRole -> {
                        User_Role_DTO userRoleDTO = new User_Role_DTO();
                        userRoleDTO.setRole_id(userRole.getRole_id());
                        userRoleDTO.setRole_name(userRole.getRole_name());
                        userRoleDTO.setRole_description(userRole.getRole_description());
                        userRoleDTO.setFormattedDate(userRoleDTO.getFormattedDate());
                        return userRoleDTO;
                    })
                    .collect(Collectors.toList());
        } catch (DataIntegrityViolationException e) {
            e.printStackTrace();
            return null;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public String deleteRole(int role_id) {
        try {
            userRoleRepo.deleteById(role_id);
            return "Role Delete";
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to Delete the Role";
        }
    }

    public User_Role_DTO updateUserRole(User_Role_DTO userRoleDto) {
        try {
            userRoleRepo.save(modelMapper.map(userRoleDto, User_Roles.class));
            return userRoleDto;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
