import styled from "styled-components";
import Spinner from "../../ui/Spinner";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
export default function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoading2 } = useRecentStays();
  console.log(stays);
  if (isLoading1 || isLoading2) return <Spinner />;
  console.log(bookings);
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart of sales</div>
    </StyledDashboardLayout>
  );
}
