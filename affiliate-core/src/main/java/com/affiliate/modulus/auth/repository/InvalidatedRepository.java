package com.affiliate.modulus.auth.repository;

import com.affiliate.modulus.auth.entity.InvalidatedToken;
import com.affiliate.modulus.auth.entity.Permission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvalidatedRepository extends JpaRepository<InvalidatedToken, String> {
}
