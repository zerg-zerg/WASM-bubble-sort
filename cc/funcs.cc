void swap(int &m, int &n)
{
    int temp;
    temp = m;
    m = n;
    n = temp;
}

extern "C" int add(int a, int b)
{
    return a + b;
}

extern "C" void bubbleSort(int *arr, int n)
{
    int i, j;
    for (i = 0; i < n - 1; i++)
    {
        // Last i elements are already
        // in place
        for (j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}