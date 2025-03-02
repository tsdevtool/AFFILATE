package com.affiliate.modulus.affiliate.repository;

import com.affiliate.modulus.affiliate.entity.CommissionHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommissionHistoryRepository extends JpaRepository<CommissionHistory, Long> {
    @Query("SELECT ch FROM CommissionHistory ch WHERE ch.affiliate.userId = :userId")
    List<CommissionHistory> findByUserId(String userId);
}
