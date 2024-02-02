package com.example.backend.Services;

import com.example.backend.DTO.Reg_User_DTO;
import com.example.backend.DTO.User_Role_DTO;
import com.example.backend.Entities.Reg_User;
import com.example.backend.Entities.User_Roles;
import com.example.backend.Repositories.Reg_User_Repository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class Reg_User_Services {

    @Autowired
    private Reg_User_Repository regUserRepository;

    @Autowired
    private ModelMapper modelMapper;
    public String registerUser(Reg_User_DTO regUserDto) {
        try {
            regUserRepository.save(modelMapper.map(regUserDto, Reg_User.class));
            return "User Registered";
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to Register the User";
        }
    }

    public List<Object[]> getAllRegisteredUsers()  {
        try {
            return regUserRepository.getUserList();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public Reg_User_DTO updateRegUser(Reg_User_DTO regUserDto) {
        try {
            regUserRepository.save(modelMapper.map(regUserDto, Reg_User.class));
            return regUserDto;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
