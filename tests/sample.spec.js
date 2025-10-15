const{test,expect} =require('@playwright/test')

test("My first test",async({page})=>{
    expect(1).toBe(1);

})

test("My Second test",async({page})=>{
    expect(1).toBe(2);
})

test("My Third test",async({page})=>{
    expect(2).toBe(2); 
})