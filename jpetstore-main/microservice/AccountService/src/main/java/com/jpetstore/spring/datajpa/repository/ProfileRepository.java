package com.jpetstore.spring.datajpa.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jpetstore.spring.datajpa.model.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Long>  {
    List<Profile> findByUserId(String username);
}
