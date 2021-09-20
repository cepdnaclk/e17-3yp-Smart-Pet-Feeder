export const MARK_AS_READ = "MARK_AS_READ";

export const markAsRead = (id) => {
  console.log("mark as read id ", id);
  return { type: MARK_AS_READ, id: id };
};
