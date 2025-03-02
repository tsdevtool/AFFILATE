package com.affiliate.modulus.affiliate.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
@Builder
public class Affiliate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String userId; //foreign key

    @Column(unique = true)
    String referralCode;

    @Column(precision = 20, scale = 2)
    BigDecimal totalCommission = BigDecimal.ZERO;

    @ManyToOne
    @JoinColumn(name = "tier_id")
    MembershipTier membershipTier;
}
