import { Rectangle } from "@pixi/math";

// AABB Collision Check
export const collision = (rectangleA: Rectangle, rectangleB: Rectangle) => {
    return (
        rectangleA.x < rectangleB.x + rectangleB.width &&
        rectangleA.x + rectangleA.width > rectangleB.x &&
        rectangleA.y < rectangleB.y + rectangleB.height &&
        rectangleA.y + rectangleA.height > rectangleB.y
    );
};
