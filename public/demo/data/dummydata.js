/* Generate dummy data on website https://json-generator.com/
* Below are some examples for generate Customers, Products, Countries
*/


// CustomerService
[
    '{{repeat(50, 30)}}',
    {
      id: '{{objectId()}}',
      name: '{{firstName()}} {{surname()}}',
      country: {
        name: '{{ random("Germany", "Croatia", "Austria", "Switzerland") }}',
        code: '{{ state() }}'
       },
      company: '{{company().toUpperCase()}}',
      date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
      status: '{{random("unqualified", "qualified", "new", "negotiation", "renewal", "proposal")}}',
      verified: '{{bool()}}',
      activity: '{{ integer(10, 100) }}',
      picture: 'https://i.pravatar.cc/150?img={{ integer(1,70) }}',
      representative: {
          name: '{{firstName()}} {{surname()}}',
        image: 'https://i.pravatar.cc/150?img={{ integer(1,70) }}'
      },
      balance: '{{ integer(100, 10000) }}'
    }
]