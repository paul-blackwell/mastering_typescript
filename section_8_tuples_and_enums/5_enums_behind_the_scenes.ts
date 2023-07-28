
// enum OrderStatus {
//   PENDING,
//   SHIPPED,
//   DELIVERED,
//   RETURNED,
// }

// const order = {
//   orderNumber: 204643543,
//   status: OrderStatus.PENDING,
// };


/**
 * IF we don't put a const in front of our
 * enum it will add a function to our complied JS code
 */

// var OrderStatus;
// (function (OrderStatus) {
//   OrderStatus[(OrderStatus['PENDING'] = 0)] = 'PENDING';
//   OrderStatus[(OrderStatus['SHIPPED'] = 1)] = 'SHIPPED';
//   OrderStatus[(OrderStatus['DELIVERED'] = 2)] = 'DELIVERED';
//   OrderStatus[(OrderStatus['RETURNED'] = 3)] = 'RETURNED';
// })(OrderStatus || (OrderStatus = {}));
// const order = {
//   orderNumber: 204643543,
//   status: OrderStatus.PENDING,
// };


const enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const order = {
  orderNumber: 204643543,
  status: OrderStatus.PENDING,
};

/**
 * However, if we add const in front of our
 * a function for the enum will not be added to our complied JS code.
 * 
 * But "status: 0" is added instead of "status: OrderStatus.PENDING"
 * 
 * Note adding const will not make the enum a variable
 */

// const order = {
//   orderNumber: 204643543,
//   status: 0 /* OrderStatus.PENDING */,
// };
