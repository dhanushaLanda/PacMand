export default class FoodGenerator {
    private height : number ;
    private width: number ;
    private foodSize: number;

    constructor(height: number, width: number, foodSize: number) {
        this.foodSize = foodSize;
        this.height = height;
        this.width = width
    }
    public generate(){
        var foodList = [];
        for (var i = this.foodSize; i <= this.height; i = i+ this.foodSize){
            for (var j = this.foodSize; j <= this.width; j += this.foodSize) {
                foodList.push({
                    left : i,
                    top : j
                })
            }
        }
        return foodList;

    }
}
