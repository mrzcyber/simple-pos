export * from "./auth-schema.js";
import {integer,varchar, pgTable} from "drizzle-orm/pg-core"
import { defineRelations } from "drizzle-orm";

export const brands = pgTable("brands", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar().notNull(),
});

export const categories = pgTable("categories", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar().notNull(),
});

export const products = pgTable("products", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar().notNull(),
    description: varchar().notNull(),
    price: integer().notNull(),
    image: varchar().notNull(),
    brandId: integer('brand_id').notNull().references(() => brands.id),
    categoryId: integer('category_id').notNull().references(() => categories.id),
});

export const relations = defineRelations({products, brands, categories},(r)=>({
    products:{
        brands : r.one.brands({
            from: r.products.brandId,
            to: r.brands.id
        }),
    categories : r.one.categories({
            from: r.products.categoryId,
            to: r.categories.id
        })
    },
    brands:{
        products : r.many.products({
            from: r.brands.id,
            to: r.products.brandId
        })
    },
    categories:{
        products : r.many.products({
            from: r.categories.id,
            to: r.products.categoryId
        })
    }
}))