package com.affiliate.modulus.transaction.entity;

import com.affiliate.entity.AuditableEntity;
import com.affiliate.modulus.transaction.util.TransactionStatus;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
@EqualsAndHashCode(callSuper = true)
public class Transaction extends AuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(precision = 20, scale = 2)
    BigDecimal amount;

    @Enumerated(EnumType.STRING)
    TransactionStatus status;

    String affiliateId; // foreign key
}
