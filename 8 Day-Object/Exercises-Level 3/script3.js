//1-
/*
const personAccount ={
    firstName:'Ahsen',
    lastName:'Tetik',
    incomes: {
        courses: 2000,
        salary: 2300,
        tutoring: 1800
     },
     expenses: {
        rent: 1200,
        bill: 400,
        saloon: 150
     },
     totalIncome: function () {
        let total = 0;
        for (const income of Object.keys(personAccount.incomes)) {
            total += personAccount.incomes[income];
        }
        return total;
    },
     totalExpense: function () {
        let total = 0;
        for (const charge of Object.keys(personAccount.expenses)) {
            total += personAccount.expenses[charge];
        }
        return total
    },
    addIncome(income, amount) {
        this.incomes[income] = amount;  
      },
    
      addExpense(expense, amount) {
        this.expenses[expense] = amount;  
      },
      
    accountBalance() {
        return this.totalIncome() -this.totalExpense();
      },
      
    accountInfo() {
        return `
          First Name: ${this.firstName}
          Last Name: ${this.lastName}
          Total Income: ${this.totalIncome()}
          Total Expense: ${this.totalExpense()}
          Total Balance: ${this.accountBalance()}          `;
      },
    
      
      
    }; 

    console.log(personAccount.accountInfo());*/
    //2-
    const users = [
        {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'08/01/2020 9:00 AM',
            isLoggedIn: false
        },
        {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'08/01/2020 9:30 AM',
            isLoggedIn: true
        },
        {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'08/01/2020 9:45 AM',
            isLoggedIn: true
        },
        {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'08/01/2020 9:50 AM',
            isLoggedIn: false
        },
        {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'08/01/2020 10:00 AM',
            isLoggedIn: false
        }
        ];
    
    
    
        function signUp(username) {
          const signUpUser = users.find(users=>users.username === username);//find methodu object içindeki aradığımız username bulacaktır
          if (signUpUser) {
            return "User already has an account.";
          }else{
           return "User has not account.";
          }
        }
        console.log(signUp('Ahsen'));
        console.log(signUp('Thomas'));

        function signIn(email,password){
          const signInUser = users.find(users => users.email === email && users.password ===password )
            if(signInUser){
              return 'User signed in successfully';
            }else{
              return 'Invalid email or password.';
            }
          }
          console.log(signIn('thomas@thomas.com','123333'));
          console.log(signIn('ahsen@gmail.com','ldldklc'));
          //3-
          
    const products = [
      {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
          { userId: 'fg12cy', rate: 5 },
          { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
      },
      {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
      },
      {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
      }
    ]

    function rateProduct(productId) {
      const product = products.find(product => product._id === productId);
      if (product) {
        return "Product rated successfully.";
      }
    
      return "Product not found.";
    }
  console.log(rateProduct('hedfcg'));


function averageRating(productId) {
  const product = products.find(product => product._id === productId);
let cevap ;
if(!product){ 
  cevap = 'ürün bulunamadı'
return cevap;}
    if (product?.ratings?.length > 0) {
      let totalRating = 0;
      for (let i = 0; i < product.ratings.length; i++) {
        totalRating += product.ratings[i].rate;
      
      }
      let average =totalRating/product.ratings.length;
      cevap= average  ;

    } else {
      cevap ="No ratings available for this product";
    }
    return cevap;
  } 


console.log(averageRating('sflkdkdskj'));

          