/**
 * Enums
 * Enums allow us to define a set of named constants.
 * We can give these constants numeric or string values.
 *
 * There's quite a few options when it
 * comes to enums!
 */

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}

const mtStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED)
