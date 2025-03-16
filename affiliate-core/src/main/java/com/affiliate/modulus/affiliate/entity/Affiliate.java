package com.affiliate.modulus.affiliate.entity;

import com.affiliate.modulus.auth.entity.User;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Affiliate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @OneToOne
    @JoinColumn(name = "user_id")
    User user; //foreign key

    @OneToOne
    @JoinColumn(name = "referral_by")
    Affiliate referralBy; //foreign key

    @Column(unique = true)
    String referralCode;

    @Column(precision = 20, scale = 2)
    BigDecimal totalCommission = BigDecimal.ZERO;
    Integer numberOfReferrals = 0;
}
