#include<stdio.h>

int getA();
void SetA(int x);

int main()
{
    printf("static value=%d",getA());
    SetA(25);
    printf("static value=%d",getA());
    
    return 0;
}
