package com.jpetstore.spring.datajpa.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.jpetstore.spring.datajpa.model.BannerData;

public interface BannerDataRepository extends JpaRepository<BannerData, Long> {
    List<BannerData> findByFavouriteCategoryId(String username);
}
