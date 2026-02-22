export const ALGO_CODE = {
  bubble: {
    c: `void bubbleSort(int a[], int n) {
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (a[j] > a[j+1]) {
                int t = a[j]; a[j] = a[j+1]; a[j+1] = t;
            }
}`,
    cpp: `void bubbleSort(vector<int>& a) {
    int n = a.size();
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (a[j] > a[j+1]) swap(a[j], a[j+1]);
}`,
    python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]`,
    javascript: `function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++)
        for (let j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j+1])
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
}`,
    java: `void bubbleSort(int[] a) {
    int n = a.length;
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (a[j] > a[j+1]) {
                int t = a[j]; a[j] = a[j+1]; a[j+1] = t;
            }
}`,
    csharp: `void BubbleSort(int[] a) {
    int n = a.Length;
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (a[j] > a[j+1])
                (a[j], a[j+1]) = (a[j+1], a[j]);
}`,
    perl: `sub bubble_sort {
    my @a = @_;
    for my $i (0 .. $#a - 1) {
        for my $j (0 .. $#a - $i - 1) {
            @a[$j, $j+1] = @a[$j+1, $j] if $a[$j] > $a[$j+1];
        }
    }
    return @a;
}`,
    swift: `func bubbleSort(_ a: inout [Int]) {
    let n = a.count
    for i in 0 ..< n - 1 {
        for j in 0 ..< n - i - 1 {
            if a[j] > a[j+1] { a.swapAt(j, j+1) }
        }
    }
}`,
    ruby: `def bubble_sort(arr)
    n = arr.size
    (n - 1).times do |i|
        (n - i - 1).times do |j|
            arr[j], arr[j+1] = arr[j+1], arr[j] if arr[j] > arr[j+1]
        end
    end
    arr
end`,
    go: `func bubbleSort(a []int) {
    n := len(a)
    for i := 0; i < n-1; i++ {
        for j := 0; j < n-i-1; j++ {
            if a[j] > a[j+1] {
                a[j], a[j+1] = a[j+1], a[j]
            }
        }
    }
}`,
  },
  selection: {
    c: `void selectionSort(int a[], int n) {
    for (int i = 0; i < n-1; i++) {
        int m = i;
        for (int j = i+1; j < n; j++)
            if (a[j] < a[m]) m = j;
        int t = a[i]; a[i] = a[m]; a[m] = t;
    }
}`,
    cpp: `void selectionSort(vector<int>& a) {
    int n = a.size();
    for (int i = 0; i < n-1; i++) {
        int m = i;
        for (int j = i+1; j < n; j++)
            if (a[j] < a[m]) m = j;
        swap(a[i], a[m]);
    }
}`,
    python: `def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        m = min(range(i, n), key=arr.__getitem__)
        arr[i], arr[m] = arr[m], arr[i]`,
    javascript: `function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let m = i;
        for (let j = i+1; j < n; j++)
            if (arr[j] < arr[m]) m = j;
        [arr[i], arr[m]] = [arr[m], arr[i]];
    }
}`,
    java: `void selectionSort(int[] a) {
    int n = a.length;
    for (int i = 0; i < n-1; i++) {
        int m = i;
        for (int j = i+1; j < n; j++)
            if (a[j] < a[m]) m = j;
        int t = a[i]; a[i] = a[m]; a[m] = t;
    }
}`,
    csharp: `void SelectionSort(int[] a) {
    int n = a.Length;
    for (int i = 0; i < n-1; i++) {
        int m = i;
        for (int j = i+1; j < n; j++)
            if (a[j] < a[m]) m = j;
        (a[i], a[m]) = (a[m], a[i]);
    }
}`,
    perl: `sub selection_sort {
    my @a = @_;
    for my $i (0 .. $#a - 1) {
        my $m = $i;
        for my $j ($i+1 .. $#a) { $m = $j if $a[$j] < $a[$m] }
        @a[$i, $m] = @a[$m, $i];
    }
    return @a;
}`,
    swift: `func selectionSort(_ a: inout [Int]) {
    let n = a.count
    for i in 0 ..< n - 1 {
        var m = i
        for j in i+1 ..< n { if a[j] < a[m] { m = j } }
        a.swapAt(i, m)
    }
}`,
    ruby: `def selection_sort(arr)
    n = arr.size
    (n - 1).times do |i|
        m = (i...n).min_by { |j| arr[j] }
        arr[i], arr[m] = arr[m], arr[i]
    end
    arr
end`,
    go: `func selectionSort(a []int) {
    n := len(a)
    for i := 0; i < n-1; i++ {
        m := i
        for j := i + 1; j < n; j++ {
            if a[j] < a[m] { m = j }
        }
        a[i], a[m] = a[m], a[i]
    }
}`,
  },
  insertion: {
    c: `void insertionSort(int a[], int n) {
    for (int i = 1; i < n; i++) {
        int key = a[i], j = i - 1;
        while (j >= 0 && a[j] > key)
            a[j+1] = a[j--];
        a[j+1] = key;
    }
}`,
    cpp: `void insertionSort(vector<int>& a) {
    int n = a.size();
    for (int i = 1; i < n; i++) {
        int key = a[i], j = i - 1;
        while (j >= 0 && a[j] > key)
            a[j+1] = a[j--];
        a[j+1] = key;
    }
}`,
    python: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key`,
    javascript: `function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key)
            arr[j+1] = arr[j--];
        arr[j+1] = key;
    }
}`,
    java: `void insertionSort(int[] a) {
    for (int i = 1; i < a.length; i++) {
        int key = a[i], j = i - 1;
        while (j >= 0 && a[j] > key)
            a[j+1] = a[j--];
        a[j+1] = key;
    }
}`,
    csharp: `void InsertionSort(int[] a) {
    for (int i = 1; i < a.Length; i++) {
        int key = a[i], j = i - 1;
        while (j >= 0 && a[j] > key)
            a[j+1] = a[j--];
        a[j+1] = key;
    }
}`,
    perl: `sub insertion_sort {
    my @a = @_;
    for my $i (1 .. $#a) {
        my $key = $a[$i];
        my $j = $i - 1;
        while ($j >= 0 && $a[$j] > $key) { $a[$j+1] = $a[$j--] }
        $a[$j+1] = $key;
    }
    return @a;
}`,
    swift: `func insertionSort(_ a: inout [Int]) {
    for i in 1 ..< a.count {
        let key = a[i]
        var j = i - 1
        while j >= 0 && a[j] > key { a[j+1] = a[j]; j -= 1 }
        a[j+1] = key
    }
}`,
    ruby: `def insertion_sort(arr)
    (1...arr.size).each do |i|
        key = arr[i]
        j = i - 1
        while j >= 0 && arr[j] > key
            arr[j+1] = arr[j]; j -= 1
        end
        arr[j+1] = key
    end
    arr
end`,
    go: `func insertionSort(a []int) {
    for i := 1; i < len(a); i++ {
        key := a[i]
        j := i - 1
        for j >= 0 && a[j] > key {
            a[j+1] = a[j]; j--
        }
        a[j+1] = key
    }
}`,
  },
};
