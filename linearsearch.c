#include<stdio.h>
int n,i,a[10];int k;
int findlinear(int n,int a[10],int k)
{
    
    for(i=0;i<n;i++)
    {
        if(k==a[i])
        {
            printf("is at:%d%d",i,a[i]);
            return 0;
    }

}}
int main()
{
    
    printf("enter the n value");
    scanf("%d",&n);
    printf("enter the elements of array");
    for(i=0;i<n;i++)
    scanf("%d",&a[i]);
    printf("enter the value of key");
    scanf("%d",&k);
    findlinear(n,a,k);
    return 0;

}
