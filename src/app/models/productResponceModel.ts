import { Product } from "./product";
import { ResponceModel } from "./reponceModel";

export interface ProductResponceModel extends ResponceModel{
    data:Product[]
}