package com.affiliate.entity;

import jakarta.persistence.MappedSuperclass;
import lombok.AccessLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;

@MappedSuperclass
@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PROTECTED)
public abstract class BaseEntity extends AuditableEntity {
    boolean isDeleted = false;
}
