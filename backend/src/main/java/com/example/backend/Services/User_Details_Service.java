package com.example.backend.Services;

import com.example.backend.DTO.User_Details_DTO;
import com.example.backend.Entities.User_Details;
import com.example.backend.Repositories.User_Details_Repo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class User_Details_Service {
    @Autowired
    private User_Details_Repo userDetailsRepo;
    @Autowired
    private ModelMapper modelMapper;

    public String saveUserDetails(User_Details_DTO userDetailsDto) {
        try {
            if (userDetailsRepo.existsByUsername(userDetailsDto.getUsername())) {
                return "Username Already Exists";
            } else if (userDetailsRepo.existsByEmail(userDetailsDto.getEmail())) {
                return "Email ID Already Registered";
            } else if (userDetailsRepo.existsByTell(userDetailsDto.getTell())) {
                return "User Contact Already Registered";
            }
            else {
                userDetailsRepo.save(modelMapper.map(userDetailsDto, User_Details.class));
                return "User Details Saved in DB";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Error with save user details";
        }
    }

    //Get Role Data
    public List<User_Details_DTO> getAllUserDetails() {
        try{
            List<User_Details> userDetails = userDetailsRepo.findAll();
            return userDetailsRepo.findAll().stream()
                    .map(userDetail -> {
                        User_Details_DTO userDetailsDto = new User_Details_DTO();
                        userDetailsDto.setId(userDetail.getId());
                        userDetailsDto.setUser_full_name(userDetail.getUser_full_name());
                        userDetailsDto.setAddress(userDetail.getAddress());
                        userDetailsDto.setEmail(userDetail.getEmail());
                        userDetailsDto.setRole(userDetail.getRole());
                        userDetailsDto.setTell(userDetail.getTell());
                        userDetailsDto.setUsername("No Access");
                        userDetailsDto.setPassword("No Access");
                        return userDetailsDto;
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
}
