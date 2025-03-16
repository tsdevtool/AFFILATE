package com.affiliate.entity;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.FieldDefaults;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;

@MappedSuperclass
@Data
@ToString
@SuperBuilder
@EntityListeners(AuditingEntityListener.class)
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PROTECTED)
public abstract class AuditableEntity {
    @CreatedBy
    @Column(length = 50, updatable = false)
    String createdBy;

    @CreatedDate
    @Column(updatable = false)
    Instant createdAt = Instant.now();

    @LastModifiedBy
    @Column(length = 50)
    String lastModifiedBy;

    @LastModifiedDate
    @Column()
    Instant lastModifiedAt = Instant.now();
}
