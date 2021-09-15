export const MARK_AS_READ = "MARK_AS_READ";

export const markAsRead = (id) => {
  return { type: MARK_AS_READ, id: id };
};
