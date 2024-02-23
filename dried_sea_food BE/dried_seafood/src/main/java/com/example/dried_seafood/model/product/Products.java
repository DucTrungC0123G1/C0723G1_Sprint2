package com.example.dried_seafood.model.product;

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
@Table(name = "products")
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column( nullable = false, unique = true)
    private String code;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private int quantity;
    @Column(nullable = false)
    private String description;
    @Column(columnDefinition = "bit(1)")
    private Boolean is_delete;

    @ManyToOne
    @JoinColumn(name = "id_type_product", referencedColumnName = "id")
    private TypeProduct typeProduct;

    @ManyToOne
    @JoinColumn(name = "id_image", referencedColumnName = "id")
    private Image image;

}
