#include <iostream>
#include "funcs.h"

using namespace std;


void printArray(int arr[], int size)
{
    int i;
    for (i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{
    int maxNum = 80000;
    int *arr = new int[maxNum];

    for (int i = 0; i < maxNum;i++) {
        arr[i] = maxNum - i;
    }

    //printArray(arr, maxNum);

    auto start = std::chrono::steady_clock::now();
    bubbleSort(arr, maxNum);
    std::cout << "Sorted in(ms)=" << std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now() - start).count() << std::endl;

    //cout << "Sorted array: \n";
    //printArray(arr, maxNum);

    return 0;
}