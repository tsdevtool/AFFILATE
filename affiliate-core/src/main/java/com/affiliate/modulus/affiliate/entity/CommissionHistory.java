package com.affiliate.modulus.affiliate.entity;

import com.affiliate.entity.AuditableEntity;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class CommissionHistory extends AuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "affiliate_id", nullable = false)
    Affiliate affiliate;

    @ManyToOne
    @JoinColumn(name = "commission_rule_id", nullable = false)
    CommissionRule commissionRule;

    @Column(nullable = false)
    BigDecimal amount;
}
