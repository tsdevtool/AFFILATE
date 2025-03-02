package com.affiliate.modulus.affiliate.entity;

import com.affiliate.entity.AuditableEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
@SuperBuilder
public class CommissionHistory extends AuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "affiliate_id", nullable = false)
    Affiliate affiliate;

    @Column(nullable = false)
    String commissionType;

    @Column(nullable = false)
    BigDecimal amount;
}
