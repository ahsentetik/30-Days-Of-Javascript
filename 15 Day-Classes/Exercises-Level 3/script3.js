//1
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics{
    constructor(data){
        this.data=data;

    }
    count(){
        return this.data.length;
    }
    sum(){
        return this.data.reduce((acc,curr) => acc+curr);
    }
    /*Math.min ve Math.max gibi fonksiyonlar 
    birden fazla sayısal argümanı kabul eder. 
    Ancak bir dizi içerisinde birden fazla sayı varken, 
    bu değerleri doğrudan Math.min veya Math.max fonksiyonlarına aktaramayız. 
    İşte burada spread operatörü devreye girer.*/
    min(){
        return Math.min(...this.data);
        
    }
    max(){
        return Math.max(...this.data);
    }
    range(){
        return this.max()-this.min()
    }
    mean(){
        return  this.sum() / this.data.length;
    }
    median(){
        let dataSort = ([...this.data].sort());
        let n = dataSort.length;

       
        if(n %2===0){
            const mid1 =dataSort[n/2-1]
            const mid2=dataSort[n/2];
            return(mid1+mid2)/2;

        }
        else{
            return dataSort[Math.floor(n/2)];
        }
        }
        mode() {
            const frequencyMap = {};
            for (const value of this.data) {
                if (frequencyMap[value]) {
                    frequencyMap[value]++;
                } else {
                    frequencyMap[value] = 1;
                }
            }
        
            let maxFrequency = 0;
            let mode = null;
            for (const value in frequencyMap) {
                if (frequencyMap[value] > maxFrequency) {
                    maxFrequency = frequencyMap[value];
                    mode = value;
                }
            }
        
            return { mode: mode, count: maxFrequency };
        }
        
    var() {
        const mean = this.mean(); 
        let squaredDifferencesSum = 0;
        for (let val of this.data) {
            const difference = val - mean;
            squaredDifferencesSum += difference * difference;
        }
        const variance = squaredDifferencesSum / this.count();
        return variance;
    }
    std() {
        return Math.sqrt(this.var());
    } 

    freqDist() {
        const frequencyMap = this.data.reduce((freq, val) => {
            freq[val] = (freq[val] || 0) + 1;
            return freq;
        }, {});

        return Object.entries(frequencyMap).map(([value, count]) => [count, Number(value)]);
    }
    
    }

const statis = new Statistics(ages);
console.log("Count:",  statis.count());
console.log("Sum:",statis.sum());
console.log("Min:",statis.min());
console.log("Max:",statis.max());
console.log("Range:",statis.range());
console.log("Mean:",statis.mean());
console.log("Median:",statis.median());
console.log("Mode:",statis.mode());
console.log("Var:",statis.var());
console.log("Std:",statis.std());
console.log('Frequency Distribution:',statis.freqDist());

//2
class PersonAccount {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
      this.incomes = [];
      this.expenses = [];
    }
  
    getName() {
      return this.name;
    }
  
    getSurname() {
      return this.surname;
    }
  
    getIncomes() {
      return this.incomes;
    }
  
    getExpenses() {
      return this.expenses;
    }
  
    totalIncome() {
      return this.incomes.reduce((total, income) => total + income);
    }
  
    totalExpense() {
      return this.expenses.reduce((total, expense) => total + expense);
    }
  
    accountInfo() {
      return {
        name: this.name,
        surname: this.surname,
        totalIncome: this.totalIncome(),
        totalExpense: this.totalExpense(),
      };
    }
  
    addIncome(amount, description) {
      this.incomes.push({ amount, description,});
    }
  
    addExpense(amount, description) {
      this.expenses.push({amount,description,});
    }
  
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  }
  