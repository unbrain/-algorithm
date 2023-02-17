class MyList {
  private nums: Aarry<number>;
  private _capacity: number = 10;
  private _size: number = 0;
  private extendRatio: number = 2;
  constructor() {
    this.nums = new Array(this._capacity);

  }

  public size(): number {
    return this.size();
  }

  public capacity(): number {
    return this._capacity;
  }

  public get(index: number): number {
    if (index < 0 || index > this._size) throw new Error('索引越界');
    return this.nums[index];
  }

  public set(index: number, num: number): void {
    if (index < 0 || index >= this._size) throw new Error('索引越界');
    this.nums[index] = num;
  }

  public extendCapacity(): void {
    this.nums = this.nums.concat(new Array(this.capacity() * (this.extendRatio - 1)))
    this._capacity = this.nums.length;
  }

  public add(num: number): void {
    if (this._size === this._capacity) this.extendCapacity();
    this.nums[this._size] = num;
    this._size++;
  }

  public insert(index: number, num: number): void {
    if (index < 0 || index >= this._size) throw new Error('索引越界')
    if (this._size === this._capacity) {
      this.extendCapacity();
    }

    for (let j = this._size - 1; j >= index; j--) {
      this.nums[j + 1] = this.nums[j];
      this.nums[index] = num;
      this._size++;
    }
  }

  public remove(index: number): number {
    if (index < 0 || index >= this._size) throw new Error('索引越界')
    const num = this.nums[index]
    for (let j = index; j < this._size - 1; j++) {
      this.nums[j] = this.nums[j + 1];
    }
    this._size--;
    return num;
  }

  public toArray(): number[] {
    let size = this.size();
    let nums = new Array(size);
    for (let i = 0; i < size; i++) {
      nums[i] = this.get(i);
    }
    return nums
  }
}

export { MyList }