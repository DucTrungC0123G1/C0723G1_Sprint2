package com.example.dried_seafood.model.size;

import com.example.dried_seafood.model.product.Image;
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
@Table(name = "size_detail")
public class SizeDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private int quantity;
    @Column(nullable = false)
    private Double price;

    @ManyToOne
    @JoinColumn(name = "id_product", referencedColumnName = "id")
    private Products products;

    @ManyToOne
    @JoinColumn(name = "id_size", referencedColumnName = "id")
    private Size size;


}
