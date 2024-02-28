package com.example.dried_seafood.repository.product;

import com.example.dried_seafood.model.product.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Products,Integer> {


    @Query(value = "select products.id,products.code, products.name,products.quantity,products.description,products.id_image," +
            "products.id_type_product,products.is_delete " +
            "from products" +
            " join image on products.id_image = image.id " +
            "where products.is_delete = 0 " +
            "and products.name like :nameSearch",nativeQuery = true)
    Page<Products> findAllProduct(Pageable pageable, @Param("nameSearch") String nameSearch);


}
