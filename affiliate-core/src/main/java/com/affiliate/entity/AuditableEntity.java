package com.affiliate.entity;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
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
public abstract class AuditableEntity {
    @CreatedBy
    @Column(length = 50, updatable = false)
    protected String createdBy;

    @CreatedDate
    @Column(updatable = false)
    protected Instant createdAt = Instant.now();

    @LastModifiedBy
    @Column(length = 50)
    protected String lastModifiedBy;

    @LastModifiedDate
    @Column()
    protected Instant lastModifiedAt = Instant.now();
}
