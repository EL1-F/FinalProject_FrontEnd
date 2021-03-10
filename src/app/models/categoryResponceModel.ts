import { Category } from "./category";
import { ResponceModel } from "./reponceModel";

export interface CategoryResponceModel extends ResponceModel{
    data:Category[]
}