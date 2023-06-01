class SafeArray {
    private array: number[];
    private failedAttempts: number[];
    private failedIndexes: number[];
  
    constructor() {
      this.array = new Array(5);
      this.failedAttempts = [];
      this.failedIndexes = [];
    }
  
    putElement(index: number, value: number): void {
      if (index >= 0 && index < this.array.length) {
        this.array[index] = value;
      } else {
        this.failedAttempts.push(index);
        this.failedIndexes.push(index);
      }
    }
  
    getElement(index: number): number {
      if (index >= 0 && index < this.array.length) {
        return this.array[index];
      } else {
        this.failedAttempts.push(index);
        return -1;
      }
    }
  
    getFailedAttempts(): number[] {
      return this.failedAttempts;
    }
  
    getFailedIndexes(): number[] {
      return this.failedIndexes;
    }
  }
  
  // Test the SafeArray class
  const sa1 = new SafeArray();
  let temp = 125;
  
  sa1.putElement(3, temp);
  temp = sa1.getElement(3);
  sa1.putElement(27, temp);
  sa1.putElement(7, temp);
  
  console.log("Failed attempts:", sa1.getFailedAttempts());
  console.log("Failed indexes:", sa1.getFailedIndexes());
  