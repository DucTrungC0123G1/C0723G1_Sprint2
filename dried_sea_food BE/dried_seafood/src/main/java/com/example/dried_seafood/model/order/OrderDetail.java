package com.example.dried_seafood.model.order;

import com.example.dried_seafood.model.product.Products;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "order_detail")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private Integer purchased_quantity;

    @ManyToOne
    @JoinColumn(name = "id_product", referencedColumnName = "id")
    private Products products;

    @ManyToOne
    @JoinColumn(name = "id_order", referencedColumnName = "id")
    private Orders order;
}
