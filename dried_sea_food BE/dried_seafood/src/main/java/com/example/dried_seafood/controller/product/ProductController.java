package com.example.dried_seafood.controller.product;

import com.example.dried_seafood.model.product.Products;
import com.example.dried_seafood.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/list")
public ResponseEntity<?> getAllProduct(
            @RequestParam(name = "nameProduct", defaultValue = "", required = false) String name,
//            @RequestParam(name = "typeProduct", defaultValue = "", required = false) String type,
            @RequestParam(defaultValue = "0", required = false) int page
    ){
        Pageable pageable = PageRequest.of(page, 8);
        Page<Products> productPage = productService.findAllProduct(pageable,name);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }
}
