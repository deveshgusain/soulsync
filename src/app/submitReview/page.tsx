import AppBar from "@/packages/ui/components/AppBar";
import PageHeader from "@/packages/ui/components/PageHeader";
import SubmitReview from "@/packages/ui/components/Review/SubmitReview";

export default function() {
    return <div>
        <AppBar />
        <PageHeader  text="Submit Review"/>
        <SubmitReview />
    </div>
}